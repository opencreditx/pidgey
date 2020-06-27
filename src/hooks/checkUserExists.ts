import { Hook, HookContext } from "@feathersjs/feathers";
import User from "../models/users.model";
import app from "../app";
import idx from "idx";

export default (): Hook => {
    return async (context: HookContext): Promise<HookContext> => {
        // idx(props, _ => _.user.friends[0].friends)
        const email = idx(context, (_) => _.params.query.email);

        if (email !== undefined) {
            const result = await User(app).find({
                email: email,
            });
            if (result.length === 0) {
                console.log("setting email doesnt exist!");
                context.result = {
                    email: email,
                    message: "Email does not exist!",
                    code: "200",
                };
            }
        }

        console.log("returning context", context);

        return context;
    };
};
