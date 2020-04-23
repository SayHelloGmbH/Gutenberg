import { _x } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType, getBlockDefaultClassName } from '@wordpress/blocks';

registerBlockType( 'mhm/vertical-menu', {
	title: _x( 'Vertical menu', 'Block title', 'sht' ),
	icon: 'list-view',
	category: 'widgets',
	keywords: [ 'Menu', 'Navigation', 'List' ],
	supports: {
		mode: false,
		html: false,
		multiple: true,
		reusable: true
	},
	edit: class extends Component {
		constructor( props ) {
			super( ...arguments );
			this.props = props;
		}

		render() {

			const { className } = this.props;

			return (
				<div className={className}>
					<InnerBlocks
						templateLock={true}
						allowedBlocks={(['core/heading'], ['core/list'])}
						template={[
							[
								'core/heading',
								{
									level: 2,
									content: _x('Menü', 'Default content', 'sht')
								}
							],
							['core/list', {
								className: 'is-style-none'
							}]
						]}
					/>
				</div>
			);
		}
	},
	save() {
		const className = getBlockDefaultClassName( 'mhm/vertical-menu' );
		return (
			<div className={className}>
				<InnerBlocks.Content />
			</div>
		);
	}
} );