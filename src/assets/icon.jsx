import { Icons } from "./icons";

// eslint-disable-next-line react/prop-types
const Icon =({ alt, icon }) => {
    let selectedIcon = Icons[icon];
    return (
        <div className="icon" data-testid={`icon`}>
            <img src={selectedIcon} alt={alt} className="iconsImg" />
        </div>
    )
}
export default Icon;