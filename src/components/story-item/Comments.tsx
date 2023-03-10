import { useState, FC } from "react";
import Comment from "./Comment";
import { Box, Typography } from "@mui/material";

interface Props {
  treeData: number[];
}

const Comments: FC<Props> = ({ treeData }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const changeStatus = () => {
    setIsLoading(false);
  };

  return (
    <Box sx={{ pl: 1 }}>
      {isLoading && <Typography variant="h6">Загрузка...</Typography>}
      {treeData.map((node: number) => (
        <Comment
          isLoading={isLoading}
          changeStatus={changeStatus}
          node={node}
          key={node}
        />
      ))}
    </Box>
  );
};

export default Comments;
