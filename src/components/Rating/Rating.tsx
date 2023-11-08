import { Star } from './Star'

type RatingProps = {
	value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingProps) {
	return (
		<div>
			<Star selected={true} />
			<Star selected={true} />
			<Star selected={false} />
			<Star selected={false} />
			<Star selected={false} />
		</div>
	)
}
