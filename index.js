import express from "express";
import cors from "cors";
import { postgraphile } from "postgraphile";

const app = express();
const port = 5001;

app.use(cors());
app.use(
    postgraphile(
        `postgres://${process.env.PSQL_USER}:${process.env.PSQL_PASSWORD}@${process.env.PSQL_HOST}:${process.env.PSQL_PORT}/${process.env.PSQL_DATABASE}?sslmode=require`,
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
