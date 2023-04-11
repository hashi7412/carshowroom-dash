import { Box } from 'elements';
import FBox from 'elements/fbox';
import styled from 'styled-components';
import { BasicVar } from 'styles/variables';

export const DashLayoutWrapper = styled(FBox)`
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    padding: 1rem 0 0;
`

export const Container = styled(Box)({
    flex: 1,
    padding: `1rem ${BasicVar.containerXPadding.label} 0`,
    overflow: 'auto'
})
