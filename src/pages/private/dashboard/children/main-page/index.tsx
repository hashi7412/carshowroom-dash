import React from "react";
import { Box } from "elements";
import { Outlet } from "react-router-dom";
import FBox from "elements/fbox";
import Icon from "components/icon";
import { CARTYPEDATA } from "constants/document";
import Link from "components/link";
import { BasicVar, DefaultColor, FontSize } from "styles/variables";

interface NavItemProps {
	item: CategoryItemType
	activeKey: string
	setActiveKey: any
}

const navItem: CategoryItemType[] = [
	{ label: 'All Categories', key: '', badge: 15 },
	...CARTYPEDATA
]

const NavItem = ({ item, activeKey, setActiveKey }: NavItemProps) => {

	return (
		<Box
			display={'inline-block'}
			flex={1}
		>
			<Link
				to={item.key || ''}
				onClick={() => setActiveKey(item.key)}
				w={'100%'}
				p={'1.5rem'}
				fSize={FontSize.fSize3.label}
				bg={activeKey === item.key ? DefaultColor.primary.label : BasicVar.bgCard.label}
			>
				<FBox hAlign={'space-between'}>
					{item.label}
					<FBox
						vAlign={'center'}
						g={'1rem'}
					>
						<FBox
							position={'relative'}
							hAlign={'center'}
							vAlign={'center'}
							p={'3px'}
							clipPath={'polygon(0 0, 75% 0%, 100% 29%, 100% 100%, 25% 100%, 0 72%)'}
							bg={'#2D3342'}
							tAlign={'center'}
						>
							<Box
								display={'inline-block'}
								p={'0 0.5rem'}
								minW={'40px'}
								clipPath={'polygon(0 0, 75% 0%, 100% 29%, 100% 100%, 25% 100%, 0 72%)'}
								bg={'#5B6977'}
								fSize={FontSize.fSize5.label}
								tAlign={'center'}
								zIndex={1}
							>
								{item.badge}
							</Box>
						</FBox>
						<Icon icon="ArrowRight" width="10px" height="10px" />
					</FBox>
				</FBox>
			</Link>
		</Box>
	)
}

const MainPage = () => {
	const [activeKey, setActiveKey] = React.useState<string>(navItem[0].key || '');

	return (
		<FBox h={'100%'}>
			<Box
				as={'nav'}
				overflow={'auto'}
				h={'100%'}
				minW={'17rem'}
			>
				<FBox
					as={'ul'}
					fDir={'column'}
					g={'2px'}
				>
					{navItem.map((item: CategoryItemType, key) => (
						<NavItem key={key} item={item} activeKey={activeKey} setActiveKey={setActiveKey} />
					))}
				</FBox>
			</Box>
			<Box p={'0 1rem'} flex={1} overflow={'auto'} >
				<Outlet />
			</Box>
		</FBox>
	)
}

export default MainPage;
