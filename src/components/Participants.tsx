import type { FunctionComponent } from 'react'
import styles from './Participant.module.css'
import { ParticipantAvatar } from './ParticipantAvatar'

export type Participant = { id: string; name: string }

export interface ParticipantsProps {
	participants: Participant[]
}

export const Participants: FunctionComponent<ParticipantsProps> = ({
	participants,
}) => {
	return (
		<div className={styles.wrapper}>
			{participants.map(({ id, name }) => (
				<ParticipantAvatar key={id} id={id} name={name} />
			))}
		</div>
	)
}
