export default function ({ params }: {
    params: {
        id: string
    }
}) {
    return (
        <div>
            Meeting Room : {params.id}
        </div>
    )
}