import { Contact } from '../../component/contact/ContactItem.types';
import HttpClient from '../api/ApiVK';

interface NewsParameter { }
class ContactService {
    public listData(search: string): Promise<Contact[]> {
        return HttpClient.get<NewsParameter, Contact[]>({
            path: `/contacts/${search}`,
            token: undefined,
        });
    }
}
export default new ContactService();
