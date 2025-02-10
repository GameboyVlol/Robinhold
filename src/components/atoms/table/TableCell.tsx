import { TableCell as MUITableCell, styled } from "@mui/material"

const StyledTableCell = styled(MUITableCell)({
    padding: 0,
    textAlign: 'center'
})

export const TableCell = ({children}: {children: React.ReactNode})=>(
    <StyledTableCell>
        {children}
    </StyledTableCell>
)