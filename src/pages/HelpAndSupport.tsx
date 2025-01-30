import HelpCenter from "../components/help&support/help-center"
import Prompts from "../components/help&support/prompts"

const HelpAndSupport = () => {
    return (
        <div className="w-full flex xl:flex-row flex-col items-start gap-4">
            <HelpCenter />
            <Prompts />
        </div>
    )
}

export default HelpAndSupport