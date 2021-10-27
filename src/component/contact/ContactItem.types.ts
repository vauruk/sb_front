
export interface Props {
    onPress?: () => void,
    contact: Contact,
}

export interface Contact {
    _id: string,
    picture: string,
    birthday: string,
    name: string,
    address: string,
    phone_number: string,
}
