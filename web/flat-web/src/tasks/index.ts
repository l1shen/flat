import { initRegisterApps } from "./init-register-apps";
import { initServiceWork } from "./init-service-works";
import { initUI } from "./init-ui";

export const tasks = [initServiceWork, initUI, initRegisterApps];
