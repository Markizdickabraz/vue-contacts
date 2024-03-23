import { createStore } from "vuex";
import { AuthModule } from "@/store/AuthModule";

export default createStore({
    modules: {
        auth: AuthModule
    }
})