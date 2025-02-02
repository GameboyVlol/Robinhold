import { TableCell as MUITableCell, styled } from "@mui/material"

const StyledTableCell = styled(MUITableCell)({
    padding: 0
})

export const TableCell = ({children}: {children: React.ReactNode})=>(
    <StyledTableCell>
        {children}
    </StyledTableCell>
)