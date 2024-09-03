import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function TableComponent({
  data,
  entriesToShow,
}: {
  data: any;
  entriesToShow: string[];
}) {
  return (
    <Table className="text-sm bg-secondary">
      <TableBody>
        {entriesToShow.map((prop, index) => (
          <TableRow key={prop}>
            <TableCell className="p-0 m-0">
              {index & 1 ? (
                <div className="ml-4 w-4 h-4 bg-accent rounded-full" />
              ) : (
                <div className="ml-4 w-4 h-4 bg-primary rounded-full" />
              )}
            </TableCell>
            <TableCell>{prop}</TableCell>
            <TableCell className="text-end">{data[prop]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
