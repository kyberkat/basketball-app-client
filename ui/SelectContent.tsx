'use client'

import LargeLays from '@/containers/LargeLays'
import {useState} from 'react'
import ContentBar from './contentBar'
import PlayerFeed from './feed'
import GameFeed from './gamefeed'

// organized list of contents
export interface ContentBarProps {
    handleSelect: (content: 'Player Stats' | 'Game Stats') => void
    content: string
}

const SelectContent = () => {
    const [content, setContent] = useState('Player Stats')

    const handleSelect:ContentBarProps['handleSelect'] = (content: 'Player Stats' | 'Game Stats') => {
        setContent(content)
    }

    return (
        <>
            <LargeLays>
                {/* for same page content navigation */}
                <ContentBar handleSelect={handleSelect} content={content}/>
                {content === 'Player Stats' && <PlayerFeed/>}
                {content === 'Game Stats' && <GameFeed/>}
            </LargeLays>
        </>
    )
}

export default SelectContent