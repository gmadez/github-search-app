export interface NoResultsProps {
    searchTerm: string
}

export const NoResults:React.FC<NoResultsProps> = ({searchTerm}) => {
    return (
        <>
            <h2>We couldn't find matches for <strong>{searchTerm}</strong></h2>
            <div>Double check your search for any typos or spelling errors - or try a different search term.</div>
        </>
    )
}