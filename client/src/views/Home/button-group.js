import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import ButtonBase from "@mui/material/ButtonBase"
import Typography from "@mui/material/Typography"

const images = [
	{
		url: "https://us.123rf.com/450wm/lisitsaimage/lisitsaimage1711/lisitsaimage171100014/90862902-multiracial-children-sitting-around-round-table-with-pile-of-books-on-it-and-listening-to-girl-readi.jpg?ver=6",
		title: "Clubs",
		width: "40%",
	},
	{
		url: "https://media.istockphoto.com/vectors/literature-fans-people-with-books-vector-id1212702257?k=20&m=1212702257&s=612x612&w=0&h=_bjkUve9ITd3FPCqt8Q-RZla_4X7MYZBKZ5BfXFPBIU=",
		title: "Events",
		width: "30%",
	},
	{
		url: "https://image.shutterstock.com/image-vector/kidsboys-girls-read-books-sit-260nw-1384552052.jpg",
		title: "Club Wise Events",
		width: "30%",
	},
]

const ImageButton = styled(ButtonBase)(({ theme }) => ({
	position: "relative",
	height: 200,
	[theme.breakpoints.down("sm")]: {
		width: "100% !important", // Overrides inline-style
		height: 100,
	},
	"&:hover, &.Mui-focusVisible": {
		zIndex: 1,
		"& .MuiImageBackdrop-root": {
			opacity: 0.15,
		},
		"& .MuiImageMarked-root": {
			opacity: 0,
		},
		"& .MuiTypography-root": {
			border: "4px solid currentColor",
		},
	},
}))

const ImageSrc = styled("span")({
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: "cover",
	backgroundPosition: "center 40%",
})

const Image = styled("span")(({ theme }) => ({
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: theme.palette.common.white,
}))

const ImageBackdrop = styled("span")(({ theme }) => ({
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.4,
	transition: theme.transitions.create("opacity"),
}))

const ImageMarked = styled("span")(({ theme }) => ({
	height: 3,
	width: 18,
	backgroundColor: theme.palette.common.white,
	position: "absolute",
	bottom: -2,
	left: "calc(50% - 9px)",
	transition: theme.transitions.create("opacity"),
}))

export default function ButtonGroup() {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				minWidth: 300,
				width: "100%",
			}}
		>
			{images.map((image) => (
				<ImageButton
					focusRipple
					key={image.title}
					style={{
						width: image.width,
					}}
				>
					<ImageSrc
						style={{
							backgroundImage: `url(${image.url})`,
						}}
					/>
					<ImageBackdrop className="MuiImageBackdrop-root" />
					<Image>
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							sx={{
								position:
									"relative",
								p: 4,
								pt: 2,
								pb: (theme) =>
									`calc(${theme.spacing(
										1
									)} + 6px)`,
							}}
						>
							{image.title}
							<ImageMarked className="MuiImageMarked-root" />
						</Typography>
					</Image>
				</ImageButton>
			))}
		</Box>
	)
}
