import User from "./User";
import PiuLike from "./PiuLike";

export default interface Piu {
	id: string;
	userId: string;
	text: string;
	created_at: Date;
	updated_at: Date;
	likes: PiuLike[];
	user: User;
}