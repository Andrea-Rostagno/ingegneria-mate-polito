---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["row echelon form", "riduzione a scalini", "riduzione per righe", "mosse di Gauss", "operazioni elementari sulle righe", "matrice ridotta", "forma super-ridotta", "reduced row echelon form", "Gauss-Jordan", "pivot", "matrici elementari"]
tags: [competenza, area/algebra-geometria]
---

# Riduzione a scalini di una matrice

> Algoritmo che con le mosse di Gauss porta una matrice in forma ridotta (a scalini), dove rango, dipendenze tra colonne e soluzioni dei sistemi si leggono a vista.

## Definizione / enunciato
**Mosse di Gauss per le righe:**
- (a) scambiare due righe $r_i\leftrightarrow r_j$;
- (b) moltiplicare una riga per $\lambda\neq0$;
- (c) sommare a una riga un multiplo di un'altra, $r_i\mapsto r_i+\lambda r_j$.

Ogni mossa equivale a moltiplicare a sinistra per una **matrice elementare**.

Il **marker** di una riga è il suo primo elemento non nullo da sinistra. La **forma ridotta a scalini per righe** ha non più di un marker per colonna, markers ordinati in diagonale verso il basso a destra e righe nulle in fondo. (Mercadante distingue anche il **pivot**, cioè un elemento non nullo sotto il quale ci sono solo zeri: una matrice è *ridotta per righe* se ogni riga non nulla ha un pivot.)

**Super-ridotta** (Gauss-Jordan): ogni pivot vale 1 ed è l'unico elemento non nullo della sua colonna. È unica.

## Formule chiave
In una matrice ridotta a scalini:
- le righe non nulle sono linearmente indipendenti;
- le colonne marcate sono linearmente indipendenti;
- ogni colonna non marcata è combinazione lineare delle colonne marcate che la precedono;
- il numero di righe non nulle è uguale al numero di colonne marcate, e questo numero è il rango.

## Intuizione
Le mosse di Gauss non cambiano lo spazio generato dalle righe, quindi conservano il rango e l'insieme delle soluzioni del sistema associato. Nella forma ridotta "si vedono" proprietà nascoste nella matrice di partenza. Mossa illecita tipica (p. 15): eseguire insieme $r_1\mapsto r_1+r_2$ e $r_2\mapsto r_2+r_1$, perché le due mosse usano righe già modificate. Per la mossa (b) serve $\lambda\neq0$, condizione da controllare quando $\lambda$ dipende da un parametro.

## Come si usa
- Rango al variare di un parametro (p. 25 di `6_Calcolo_matriciale.pdf`): con $r_3\mapsto r_3-2r_1$ e $r_3\mapsto r_3+2ar_2$ si ottiene rango 3 per $a\neq0$ e 2 per $a=0$.
- Inversa: la super-ridotta di $(A|\mathbb 1_n)$ è $(\mathbb 1_n|A^{-1})$.
- Sistemi lineari: si riduce la matrice completa $(A|b)$ e si risolve all'indietro.

## Nei corsi
- **Algebra lineare** (triennale): calcolo matriciale parte II (slide di S. Mercadante); nel modulo numerico la stessa procedura diventa l'algoritmo di eliminazione di Gauss. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/6_Calcolo_matriciale.pdf` (p. 9-21); `Appunti, riassunti e formulari/Sisitemi_RIDUZIONE (1).pdf`.

## Prerequisiti
- [[Prodotto di matrici]]: le mosse sono prodotti per matrici elementari

## Porta a
- [[Rango di una matrice]]: numero di righe non nulle della ridotta
- [[Soluzioni di un sistema lineare]]: si riduce (A|b) e si risolve all'indietro
- [[Matrice inversa]]: super-riduzione di (A|1)

## Collegati
- [[Metodo di eliminazione di Gauss]]: versione algoritmica e numerica della stessa riduzione
- [[Determinante]]: le mosse di tipo (c) non cambiano il determinante
