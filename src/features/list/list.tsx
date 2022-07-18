import React, { FC } from "react"

interface Props {
    data?: Array<{ id: number, item: string }>
}

export const ListComponent: FC<Props> = ({ data }) => {
    if (!data || data.length === 0) return <div>No data</div>
    return (
        <div>
            <ul>
                {data.map((item, index) => {
                    return <li key={index}>{item.item}</li>
                })}
            </ul>
        </div>
    )
}
