import {useMemo} from 'react'


export const useSortedDocs = (docs, sort) => {
    const sortedDocs = useMemo(() => {
        if(sort) {
            if(!sort.localeCompare("deadline"))
            {
                return [...docs].sort((a, b) => a["deadline"].localeCompare(b["deadline"]))
            }
            else if (!sort.localeCompare("completed"))
            {

              let docsTemp = [...docs]
                docsTemp.forEach(function(item,i){
                  if(item.status){
                    let e = docsTemp.splice(i, 1);
                    docsTemp.unshift(e[0]);
                  }
                });
                return docsTemp;
            }
            else return [...docs].sort((a, b) => a["created_at"].localeCompare(b["created_at"])).reverse()
        }
        return docs;
    }, [sort, docs])

    return sortedDocs;
}



 const useDocuments = (documents, query, sort) => {

    const sortedDocs = useSortedDocs(documents, sort);

    const searchedDocs = useMemo(()=>{
        return sortedDocs.filter(doc => 
                doc.name.toLowerCase().includes(query.toLowerCase())
                ||
                doc.departament.toLowerCase().includes(query.toLowerCase())
                ||
                doc.type.toLowerCase().includes(query.toLowerCase())
            )
    }
    ,[query, sortedDocs])

    return searchedDocs

}

export default useDocuments