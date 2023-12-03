import express from "express";
import cors from "cors";
import { postgraphile } from "postgraphile";

const app = express();
const port = 5001;

app.use(cors());
app.use(
    postgraphile(
        `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PWD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
        "public",
        {
            disableDefaultMutations: false,
            dynamicJson: true,
            graphiql: true,
            showErrorStack: true,
            retryOnInitFail: true,
            extendedErrors: [
                "severity",
                "code",
                "detail",
                "hint",
                "position",
                "internalPosition",
                "internalQuery",
                "where",
                "schema",
                "table",
                "column",
                "dataType",
                "constraint",
                "file",
                "line",
                "routine",
            ],
            enhanceGraphiql: true,
            allowExplain: (req) => {
                // eslint-disable-next-line no-console
                console.info(`Req details: ${req}`);
                return true;
            },
            graphileBuildOptions: {
                connectionFilterRelations: true, // default: false
                connectionFilterAllowEmptyObjectInput: true,
                connectionFilterAllowNullInput: true,
            },
        }
    )
);
app.listen(port);
