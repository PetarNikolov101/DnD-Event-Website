import { useTranslation } from "react-i18next";

export default function Rules(){
    const [t, i18next] = useTranslation("global")
    return(
        <div id="rules" className="container">
        <h4>{t("rules.header")}</h4>
        <p>{t("rules.desc")}</p>
        <ul>
            <li>{t("rules.rule1")}</li>
            <li>{t("rules.rule2")}</li>
            <li>{t("rules.rule3")}</li>
            <li>{t("rules.rule4")}</li>
            <li>{t("rules.rule5")}</li>

        </ul>
        </div>
    )
}