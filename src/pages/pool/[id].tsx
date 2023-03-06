import { collection, onSnapshot } from '@firebase/firestore'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Participant, Participants } from '../../components/Participants'
import { db } from '../../utilities/db'

export default function Poll() {
	const router = useRouter()
	const [participants, setParticipants] = useState<Participant[]>([])

	const { id } = router.query

	useEffect(() => {
		if (typeof id !== 'string') {
			return
		}
		const participantsRef = collection(db, 'pools', id, 'participants')
		return onSnapshot(participantsRef, (snapshot) => {
			const participants: Participant[] = []
			snapshot.forEach((participant) => {
				participants.push({
					id: participant.id,
					name: participant.data().name.split(' ')[0],
				})
			})
			setParticipants(participants)
		})
	}, [id])

	return <Participants participants={participants} />
}
