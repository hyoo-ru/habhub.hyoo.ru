namespace $.$$ {
	
	export class $hyoo_habhub extends $.$hyoo_habhub {
		
		search_start( event?: Event ) {
			event?.preventDefault()
			this.Search().Query().bring()
		}
		
		@ $mol_mem
		uriSource(){
			
			const search = this.search()
			if( search.length < 2 ) return 'hyoo/habhub/data/issues.json?'
			
			this.$.$mol_wait_timeout(500)
			
			const query = `label:HabHub is:open "${search}"`
			return `https://api.github.com/search/issues?q=${ encodeURIComponent(query) }&sort=updated&per_page=100`
			
		}

		@ $mol_mem
		gists() {
			return $mol_github_search_issues.item( this.uriSource() ).items()
		}
		
		@ $mol_mem
		gists_dict() {
			const dict = {} as { [ key : string ] : $mol_github_issue }
			for( let gist of this.gists() ) {
				dict[ gist.uri() ] = gist
			}
			return dict
		}
		
		gist( uri : string ) {
			return this.gists_dict()[ uri ]
		}
		
		@ $mol_mem
		gist_current() {

			const uri = this.$.$mol_state_arg.value( 'gist' )
			if( uri ) return $mol_github_issue.item( uri)

			if( !this.owner() ) return null
			if( !this.repo() ) return null
			if( !this.article() ) return null
			
			return $mol_github_issue.item( `https://api.github.com/repos/${ this.owner() }/${ this.repo() }/issues/${ this.article() }` )
		}
		
		@ $mol_mem
		details_link() {
			return `https://github.com/${ this.owner() }/${ this.repo() }/issues/${ this.article() }`
		}
		
		@ $mol_mem
		Details_body() {
			const gist = this.gist_current()
			return gist ? this.Details( gist ).Body() : null!
		}
		
		owner() {
			return this.$.$mol_state_arg.value( 'author' )
		}
		
		repo() {
			return this.$.$mol_state_arg.value( 'repo' )
		}
		
		article() {
			return this.$.$mol_state_arg.value( 'article' )
		}
		
		@ $mol_mem
		pages() {
			const gist = this.gist_current()
			return [
				this.Menu_page() ,
				... gist ? [
					this.Details( gist ),
					... this.chat_pages( gist ),
				] : []
			]
		}
		
		@ $mol_mem_key
		chat_seed( issue: $mol_github_issue ) {
			return issue.uri().replace( /.*\/repos\//, '' )
		}
		
		@ $mol_mem
		menu_rows() : $mol_view[] {
			return this.gists()
				// .filter( $mol_match_text( this.search(), gist => [ gist.title(), gist.text() ] ) )
				.map( gist => this.Menu_row( gist.uri() ) )
		}
		
		@ $mol_mem_key
		gist_title( uri : string ) {
			return this.gist( uri ).title()
		}
		
		@ $mol_mem_key
		gist_arg( uri : string ) {
			const gist = this.gist( uri )
			return {
				author: gist.owner().name(),
				repo: gist.repository().name(),
				article: String( gist.number() ),
				gist: null,
			}
		}
		
		gist_current_title() {
			return this.gist_current()!.title()
		}
		
		gist_current_content() {
			return this.gist_current()!.text()
		}
		
		gist_current_issue() {
			return this.gist_current()!
		}
		
		@ $mol_mem
		gist_current_created() {
			return this.gist_current()!.moment_created().toString( 'YYYY-MM-DD' )
		}
		
		@ $mol_mem
		details_scroll_top( next? : number ) {
			const current = this.gist_current()!
			return $mol_state_session.value( `${ this }.details_scroll_top(${ current.uri() })` , next )
		}
		
	}
	
}
