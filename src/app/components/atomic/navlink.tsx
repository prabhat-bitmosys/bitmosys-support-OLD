'use client';
import { Text, makeStyles, tokens } from "@fluentui/react-components";
import { NavLinkItem } from "@/app/interfaces/navlinkitem";
import Link from "next/link";


const useStyles = makeStyles({
    colorOnHover: {
        '&:hover': {
            color: tokens.colorBrandForeground1,
        },
    },
    color: {
        color: tokens.colorBrandForeground1,
    }
});

export default function NavLink(props: NavLinkItem) {

    const styles = useStyles();

    return (
        props.defaultThemeColor ?
            <Link className={`${styles.colorOnHover} ${styles.color} ${props.class}`} href={props.link} target={props.openInNewTab ? "_blank" : ""}>
                {props.label}
            </Link >
            :
            < Link className={styles.colorOnHover} href={props.link} target={props.openInNewTab ? "_blank" : ""} >
                <Text className={props.class} size={props.textSize ?? 300}>{props.label}</Text>
            </Link >
    )

}