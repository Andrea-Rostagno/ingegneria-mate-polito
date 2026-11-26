---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["isomorphism of vector spaces", "isomorfismo", "spazi isomorfi", "automorfismo", "monomorfismo", "epimorfismo", "Iso(U,V)", "Aut(V)", "V ≅ K^n", "applicazione lineare iniettiva", "applicazione lineare suriettiva"]
tags: [competenza, area/algebra-geometria]
---

# Isomorfismo di spazi vettoriali

> Un'applicazione lineare biiettiva: identifica due spazi vettoriali conservandone la struttura. Ogni spazio di dimensione $n$ su $K$ è isomorfo a $K^n$.

## Definizione / enunciato
- **Monomorfismo**: a.l. iniettiva ($\iff\mathrm{Ker}f=\{0\}$).
- **Epimorfismo**: a.l. suriettiva ($\iff\dim\mathrm{Im}f=\dim V$).
- **Isomorfismo**: a.l. biiettiva; $f\in\mathrm{Iso}_K(U,V)\iff f^{-1}\in\mathrm{Iso}_K(V,U)$.
- **Automorfismo**: endomorfismo biiettivo, insieme $\mathrm{Aut}_K(V)$; per esempio l'identità $1_V$.

$U$ e $V$ sono **isomorfi** se esiste almeno un isomorfismo. Un isomorfismo manda basi in basi, quindi spazi isomorfi hanno la stessa dimensione.

**Isomorfismo notevole.** Scelta una base $B$ di $V_n$, la mappa delle componenti $[\,\cdot\,]_B:V_n\to K^n$, $v\mapsto(c^1,\dots,c^n)$, è un isomorfismo. Ogni spazio finitamente generato è isomorfo a un $K^n$, in infiniti modi (uno per base). Anche la trasposizione $K^{m\times n}\to K^{n\times m}$ è un isomorfismo.

## Formule chiave
$$U\simeq V\iff\dim U=\dim V\quad(\text{spazi finitamente generati sullo stesso }K)$$
Per un endomorfismo di $K^n$ con matrice $A$: $f$ automorfismo $\iff\det A\neq0\iff\mathrm{rank}A=n$.

## Intuizione
Essere isomorfi non significa coincidere: significa poter "etichettare" gli elementi dell'uno con quelli dell'altro rispettando somme e multipli. Persone e numeri di cellulare sono in biiezione, ma senza linearità quella non è un isomorfismo (esempio delle slide). L'isomorfismo $V_n\simeq K^n$ giustifica il lavoro in coordinate.

## Come si usa
- Spazi di matrici simmetriche o di polinomi: si sceglie una base e si lavora sulle $n$-ple di componenti (riduzione, rango, basi).
- Verificare che $f$ sia un isomorfismo: matrice associata quadrata con determinante non nullo.
- Indipendenza lineare come iniettività: $v_1,\dots,v_k$ sono liberi se e solo se $(\lambda^i)\mapsto\sum\lambda^iv_i$ è iniettiva; sono una base se e solo se è biiettiva.

## Nei corsi
- **Algebra lineare** (triennale): applicazioni lineari (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/11_Linear_Mappings.pdf` (p. 16-24, 55-58); `Appunti, riassunti e formulari/10_Spazi_Vettoriali_II.pdf` (p. 31-34).

## Prerequisiti
- [[Applicazione lineare]]: a.l. biiettive
- [[Nucleo e immagine]]: iniettiva se Ker = {0}, suriettiva se Im = V
- [[Teorema della dimensione]]: tra spazi di uguale dimensione iniettiva equivale a suriettiva

## Porta a
- Nessuno.

## Collegati
- [[Base e dimensione]]: la scelta di una base dà V ≅ K^n
- [[Dipendenza e indipendenza lineare]]: libero equivale a iniettività della mappa dei coefficienti
- [[Matrice inversa]]: l'inversa di un automorfismo ha matrice A⁻¹
