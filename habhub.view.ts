namespace $.$$ {
	
	export class $hyoo_habhub extends $.$hyoo_habhub {
		
		uriSource(){
			return 'https://api.github.com/search/issues?q=label:HabHub+is:open&sort=reactions'
		}

		search( next?: string ) {
			return this.$.$mol_state_arg.value( 'search', next ) ?? ''
		}
		
		gists() {
			return $mol_github_search_issues.item( this.uriSource() ).items()
		}
		
		gists_dict() {
			const dict = {} as { [ key : string ] : $mol_github_issue }
			for( let gist of this.gists() ) {
				dict[ gist.uri() ] = gist
			}
			return dict
		}
		
		gist( id : number ) {
			return this.gists_dict()[ id ]
		}
		
		@ $mol_mem
		gist_current() {

			const uri = this.$.$mol_state_arg.value( 'gist' )
			if( uri ) return this.gists_dict()[ uri ] ?? null

			if( !this.author() ) return null
			if( !this.repo() ) return null
			if( !this.article() ) return null
			
			return this.gists_dict()[ `https://api.github.com/repos/${ this.author() }/${ this.repo() }/issues/${ this.article() }` ] ?? null
		}
		
		@ $mol_mem
		details_link() {
			return `https://github.com/${ this.author() }/${ this.repo() }/issues/${ this.article() }`
		}
		
		author() {
			return $mol_state_arg.value( 'author' )
		}
		
		repo() {
			return $mol_state_arg.value( 'repo' )
		}
		
		article() {
			return $mol_state_arg.value( 'article' )
		}
		
		pages() {
			return [
				this.Menu_page() ,
				... this.gist_current() ? [ this.Details( this.gist_current() ) ] : []
			]
		}
		
		menu_rows() : $mol_view[] {
			return this.gists()
				.filter( $mol_match_text( this.search(), gist => [ gist.title() ] ) )
				.map( ( gist , index ) => this.Menu_row( gist.uri() ) )
		}
		
		gist_title( id : number ) {
			return this.gist( id ).title()
		}
		
		gist_arg( id : number ) {
			const gist = this.gist( id )
			return {
				author: gist.author().name(),
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
		
		details_scroll_top( next? : number ) {
			const current = this.gist_current()!
			return $mol_state_session.value( `${ this }.details_scroll_top(${ current.uri() })` , next )
		}
		
	}
	
}
