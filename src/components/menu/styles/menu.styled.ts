import styled from "styled-components";
import { BasicVar, FontSize } from "styles/variables";

export const MenuItemWrapper = styled.li<{active: boolean, badge?: string | number}>`
    display: inline-block;

    a {
        position: relative;
        text-decoration: none;
        font-size: ${FontSize.fSize3.label};
        text-transform: uppercase;
		transition: all ease-in-out .2s;

        ${props => props.badge 
            ? `
                &:before {
                    position: absolute;
                    top: -30%;
                    right: -20px;
                    padding: 0 5px;
                    background: ${BasicVar.bgBadge.label};
                    font-size: ${FontSize.fSize.label};
                    color: ${BasicVar.bg.label};
                    content: '${props.badge}';
                }
            ` : ``
        }

        
        &:after {
            position: absolute;
            top: 100%;
            ${props => props.active ? 'left: 0px;' : 'right: 0px;'}
            width: ${props => props.active ? '100%' : '0%'};
            height: 4px;
            background: #B7D5ED;
            content: '';
            transition: all ease-in-out .2s;
        }
    }
`
