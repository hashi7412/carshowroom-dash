import styled from 'styled-components'
import { device } from 'styles/variables'

export const setStyle = (styles: ElementDefaultProps) => {
	return `
		${styles.bs				? `box-sizing: ${styles.bs};`					: ``}
		${styles.position		? `position: ${styles.position};`				: ``}
		${styles.zIndex			? `z-index: ${styles.zIndex};`					: ``}
		${styles.top			? `top: ${styles.top};`							: ``}
		${styles.right			? `right: ${styles.right};`						: ``}
		${styles.flex			? `flex: ${styles.flex};`						: ``}
		${styles.display		? `display: ${styles.display};`					: ``}
		${styles.fDir			? `flex-direction: ${styles.fDir};`				: ``}
		${styles.fWrap			? `flex-wrap: ${styles.fWrap};`					: ``}
		${styles.alignItems		? `align-items: ${styles.alignItems};`			: ``}
		${styles.vAlign			? `align-items: ${styles.vAlign};`				: ``}
		${styles.justifyContent	? `justify-content: ${styles.justifyContent};`	: ``}
		${styles.hAlign			? `justify-content: ${styles.hAlign};`			: ``}
		${styles.g				? `gap: ${styles.g};`							: ``}
		${styles.gx				? `column-gap: ${styles.gx};`					: ``}
		${styles.gy				? `row-gap: ${styles.gy};`						: ``}
		${styles.h				? `height: ${styles.h};`						: ``}
		${styles.w				? `width: ${styles.w};`							: ``}
		${styles.minW			? `min-width: ${styles.minW};`					: ``}
		${styles.p				? `padding: ${styles.p};`						: ``}
		${styles.pl				? `padding-left: ${styles.pl};`					: ``}
		${styles.pr				? `padding-right: ${styles.pr};`				: ``}
		${styles.pt				? `padding-top: ${styles.pt};`					: ``}
		${styles.pb				? `padding-bottom: ${styles.pb};`				: ``}
		${styles.m				? `margin: ${styles.m};`						: ``}
		${styles.ml				? `margin-left: ${styles.ml};`					: ``}
		${styles.mr				? `margin-right: ${styles.mr};`					: ``}
		${styles.mt				? `margin-top: ${styles.mt};`					: ``}
		${styles.mb				? `margin-bottom: ${styles.mb};`				: ``}
		${styles.fFamily		? `font-family: ${styles.fFamily};`				: ``}
		${styles.fSize			? `font-size: ${styles.fSize};`					: ``}
		${styles.fWeight		? `font-weight: ${styles.fWeight};`				: ``}
		${styles.tAlign			? `text-align: ${styles.tAlign};`				: ``}
		${styles.bg				? `background: ${styles.bg};`					: ``}
		${styles.overflow		? `overflow: ${styles.overflow};`				: ``}
		${styles.overflowX		? `overflow-x: ${styles.overflowX};`			: ``}
		${styles.overflowY		? `overflow-y: ${styles.overflowY};`			: ``}
		${styles.bd				? `border: ${styles.bd};`						: ``}
		${styles.clipPath		? `clip-path: ${styles.clipPath};`				: ``}
		${styles.cursor			? `cursor: ${styles.cursor};`					: ``}
	`
}

export const setPseudoStyle = ({ after, before, hover, active, other, ...rest }: CSSElementStyleType) => {
	return `
		${setStyle(rest)}

		${after ? `${setStyle(after)}` : ``}
		${before ? `${setStyle(before)}` : ``}
		${other ? other : ``}
	`
}

export const BoxWrapper = styled.div<ElementDefaultProps>`
	${props => {
		const { mobileS, mobileM ,mobileL, tablet, laptop, laptopL, desktop, desktopL, ...rest } = props;

		return `
			${setPseudoStyle(rest)}

			${mobileM ? `
				@media ${device.mobileM} {
					${setPseudoStyle(mobileM)}
				}` : ``
			}

			${mobileM ? `
				@media ${device.mobileM} {
					${setPseudoStyle(mobileM)}
				}` : ``
			}

			${mobileL ? `
				@media ${device.mobileL} {
					${setPseudoStyle(mobileL)}
				}` : ``
			}

			${tablet ? `
				@media ${device.tablet} {
					${setPseudoStyle(tablet)}
				}` : ``
			}

			${laptop ? `
				@media ${device.laptop} {
					${setPseudoStyle(laptop)}
				}` : ``
			}

			${laptopL ? `
				@media ${device.laptopL} {
					${setPseudoStyle(laptopL)}
				}` : ``
			}

			${desktop ? `
				@media ${device.desktop} {
					${setPseudoStyle(desktop)}
				}` : ``
			}

			${desktopL ? `
				@media ${device.desktopL} {
					${setPseudoStyle(desktopL)}
				}` : ``
			}
		`
	}}
`
