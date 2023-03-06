import clsx from 'clsx'
import {
	CSSProperties,
	FunctionComponent,
	useEffect,
	useMemo,
	useState,
} from 'react'
import styles from './ParticipantAvatar.module.css'

export interface ParticipantAvatarProps {
	id: string
	name: string
}

const emojis = [
	'🦃',
	'🐤',
	'🦤',
	'🦉',
	'🦢',
	'🦀',
	'🦑',
	'🦭',
	'🐢',
	'🦔',
	'🐇',
	'🐀',
	'🦡',
	'🐘',
	'🐑',
	'🐅',
	'🐈‍⬛',
	'🦍',
	'🦓',
	'🦒',
]

export const ParticipantAvatar: FunctionComponent<ParticipantAvatarProps> = ({
	id,
	name,
}) => {
	const emoji = useMemo(
		() => emojis[Math.floor(Math.random() * emojis.length)],
		[],
	)
	const [x, setX] = useState(() => Math.random())
	const [direction, setDirection] = useState<1 | -1>(() =>
		Math.random() > 0.5 ? 1 : -1,
	)
	const [speed, setSpeed] = useState(() => Math.random() * 0.0001 + 0.0001)

	useEffect(() => {
		const x = Math.random()
		setX(x)
	}, [])

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>
		const loop = () => {
			setX((x) => {
				const newX = x + speed * direction
				if (newX < 0 || newX > 1) {
					setDirection(direction === 1 ? -1 : 1)
				}
				return newX
			})
			timer = setTimeout(loop, 1000 / 60)
		}

		loop()

		return () => {
			clearTimeout(timer)
		}
	}, [direction, speed])

	return (
		<div
			className={clsx(styles.wrapper, direction === 1 && styles.is_flipped)}
			style={{ ['--x']: x } as CSSProperties}
		>
			<div className={styles.in}>
				<span className={styles.name}>{name}</span>
				<span className={styles.emoji}>{emoji}</span>
			</div>
		</div>
	)
}
