import { View } from 'react-native';
import { Text, Image, ListItem} from "@rneui/themed"
import { useTranslation } from "react-i18next"



interface seedItemProps  {
    title: string,
    subtitle?: string,
    index: number
}

const SeedItemVW = (props: seedItemProps) => {
    const { title, subtitle, index } = props
    const { t } = useTranslation()
    return (
        <ListItem.Content>
        <ListItem.Title>{index}. {title}</ListItem.Title>
        </ListItem.Content>
    )
}


export default SeedItemVW