import { Hook, HookContext } from "@feathersjs/feathers";

export default (): Hook => {
    return async (context: HookContext): Promise<HookContext> => {
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
