'use client'
import { ContentBarProps } from "./SelectContent"

const ContentBar: React.FC<ContentBarProps> = ({ content, handleSelect }) => {

    return (
        <div className="bg-blue-700 w-full col-start-2 col-span-10 flex h-full rounded-full bg-neutral-50">
            <button className={`
                flex-grow flex-1 flex items-center justify-center h-full py-4
                ${content === 'Player Stats' ? 'bg-orange-200' : 'bg-neutral-50'} rounded-full hover:bg-orange-300 text-center`}
            onClick={() => handleSelect('Player Stats')}>Players</button>
            <button className={`
                flex-grow flex-1 flex items-center justify-center h-full
                ${content === 'Game Stats' ? 'bg-orange-200' : 'bg-neutral-50'} rounded-full hover:bg-orange-300 text-center`}
            onClick={() => handleSelect('Game Stats')}>Game Stats</button>
        </div>
    )
}

export default ContentBar