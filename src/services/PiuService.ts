import Piu from "interfaces/Piu";
import api from "./api";
import PiuOperation from "interfaces/PiuOperation";

export default class PiuService {
    static async getPius(): Promise<Piu[]> {
        const response = await api.get('/pius');
        return response.data;
    }

    static async postPiu(text: string): Promise<Piu> {

        const response = await api.post('/pius', {text});
        return response.data;
    }

    static async deletePiu(piu_id: string) {
        await api.delete(`/pius/${piu_id}`);
    }

    static async likePiu(piu_id: string): Promise<PiuOperation>{
        const response = await api.patch(`/pius/like/${piu_id}`);
        return response.data;
    }

    static async getPiuById(piu_id: string): Promise<Piu>{
        const response = await api.get(`/pius/${piu_id}`);
        return response.data;
    }

}