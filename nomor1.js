//make a handle error thencatch and trycatch

//edit cekHariKerja add parameter and lowercase function
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day.toLowerCase()
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

//handle error dgn thencatch
cekHariKerja('selasaaa')
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err.message);
    });

//function to receive parameter from await
const tampilkanData = (data) => {
    console.log(data);
}
const handle = async () => {
    try {
        const tampil = await cekHariKerja('senin')
        tampilkanData(tampil)
    } catch (error) {
        console.log(error.message);
    }
}
handle()