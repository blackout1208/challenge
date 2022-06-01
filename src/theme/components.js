import palette from './palette'
import typography from './typography'

const components = {
	MuiButton: {
		variants: [
			{
				props: { variant: 'contained', color: 'secondary' },
				style: {
					color: palette.common.black,
					borderRadius: "6px",
					height: "50px",
					padding: "15px 35px",
					fontWeight: typography.button.fontWeight,
					fontSize: typography.button.fontSize,
					display: "flex",
					alignItems: "center",
					textTransform: "uppercase",
				},
			},
			{
				props: { variant: 'outlined', color: 'secondary' },
				style: {
					color: palette.secondary.main,
					borderRadius: "6px",
					height: "50px",
					padding: "15px 35px",
					fontWeight: typography.button.fontWeight,
					fontSize: typography.button.fontSize,
					display: "flex",
					alignItems: "center",
					textTransform: "uppercase",
				},
			},
		],
	},
	MuiInputBase: {
		variants: [
			{
				props: { size: 'small' },
				style: {
					height: "30px"
				},
			},
		],
	},
}

export default components
