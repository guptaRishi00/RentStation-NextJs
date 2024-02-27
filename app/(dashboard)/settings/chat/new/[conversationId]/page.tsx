
import React from 'react'
import Chat from '@/app/(dashboard)/_components/chat'

const page = ({ params }: any) => {

    const conversationId = params.conversationId

    return (
        <div>
            <Chat conversationId={conversationId} />

        </div>
    )
}

export default page