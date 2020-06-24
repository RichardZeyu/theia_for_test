/**
 * Generated using theia-extension-generator
 */
import { SayhelloCommandContribution, SayhelloMenuContribution } from './sayhello-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(SayhelloCommandContribution);
    bind(MenuContribution).to(SayhelloMenuContribution);
});
