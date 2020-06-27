import { Hook, HookContext } from "@feathersjs/feathers";

export default (): Hook => {
    return async (context: HookContext): Promise<HookContext> => {
        console.log("Allow anonymous hook called!");
        const { params } = context;

        if (params.provider && !params.authentication) {
            context.params = {
                ...params,
                authentication: {
                    strategy: "anonymous",
                },
            };
        }

        return context;
    };
};
