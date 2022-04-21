export interface ListItemProps {
  image?: string,
  label: string,
  type: string,
  url?: string,
}

export const ListItem:React.FC<ListItemProps> = ({ image, label, type, url }) => {
    return (
      <li className="w-full mb-2 border-2">
        <a target="_blank" href={url}>
          <div className="flex h-full items-center">
            <div className="w-30 m-2 content-center">
              <img className="h-16 w-16 m-auto" src={image} />
            </div>
            <div className="mb-2">
              <div className="mb-2">
                <strong>{label}</strong>
              </div>
              <span>{type}</span>
            </div>
          </div>
        </a>
      </li>
    )
}