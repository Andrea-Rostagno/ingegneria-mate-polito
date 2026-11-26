---
tipo: competenza
area: fisica
corsi: [Chimica, Fisica 2, Quantum physics]
livello: [triennale]
aliases: ["Heisenberg uncertainty principle", "principio di indeterminazione", "uncertainty principle", "principio di Heisenberg", "indeterminazione posizione-quantità di moto"]
tags: [competenza, area/fisica]
---

# Principio di indeterminazione di Heisenberg

> Non si possono conoscere simultaneamente e con precisione arbitraria posizione e quantità di moto di una particella subatomica.

## Definizione / enunciato
Heisenberg (1927): è impossibile conoscere simultaneamente la posizione esatta e l'esatta quantità di moto di una particella subatomica; tanto più precisa è la posizione dell'elettrone, tanto meno precisa è la sua velocità, e viceversa. Se l'elettrone è un'onda, il concetto stesso di posizione puntuale perde significato.
Conseguenze: nel mondo atomico non esistono traiettorie ("se non c'è momento lineare non c'è traiettoria"); il modello di Bohr con orbite precise non è corretto; si può solo calcolare l'energia e la **probabilità** di trovare l'elettrone in una regione (orbitale). Per corpi macroscopici l'effetto è trascurabile.

## Formule chiave
$$\Delta x\cdot m\,\Delta u\ \ge\ \frac{h}{4\pi}$$

## Intuizione
Per "vedere" un elettrone bisogna colpirlo con almeno un fotone, che ne perturba fortemente il moto; su una palla da baseball lo stesso fotone non ha effetto (p. 12).

## Come si usa
Esempio di p. 11: posizione nota all'1 % del raggio di Bohr, $\Delta x=5{,}29\cdot10^{-13}$ m; allora $\Delta p\ge\hbar/(2\Delta x)=9{,}96\cdot10^{-23}$ kg m/s e $\Delta u\ge1{,}1\cdot10^{8}$ m/s, lo stesso ordine della velocità della luce: della velocità dell'elettrone non si sa nulla.

## Nei corsi
- **Chimica** (triennale): Lezione 5. Fonti: `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 05 - Atomo quantistico.pdf` (lezione 5, pp. 9-12, 21).
- **Fisica 2** (triennale): due grandezze hanno indeterminazione nulla insieme se e solo se gli operatori hanno autofunzioni comuni, cioè $[\hat F,\hat G]=\hat F\hat G-\hat G\hat F=0$; altrimenti, in forma generale, $\Delta A_j\Delta A_m\ge\left|\tfrac12\langle\Psi|[\hat A_j,\hat A_m]\Psi\rangle\right|$. Tra gli esempi di commutatori $[x_i,p_j]=i\hbar\delta_{ij}$. Fonti: `triennale/ANNO 2/fisica 2/lezioni/55&56. LEZIONE.pdf` (pp. 29-41); `triennale/ANNO 2/fisica 2/lezioni/57&58. LEZIONE.pdf` (p. 3).
- **Quantum physics** (triennale): cap. 8 della dispensa di V. Penna, con dimostrazione completa per due operatori hermitiani con $[A_1,A_2]=iG$: si pongono $D_r=A_r-\langle A_r\rangle$ (stesso commutatore), si mostra $|\langle G\rangle|^2\le4|\langle D_1D_2\rangle|^2$ e si applica la disuguaglianza di Schwarz a $(D_1\psi,D_2\psi)$, ottenendo $(\Delta A_1)^2(\Delta A_2)^2\ge\frac14|\langle[A_1,A_2]\rangle|^2$, quindi $\Delta x_j\Delta p_j\ge\hbar/2$ (relazione di minima indeterminazione). Verifica sugli autostati dell'oscillatore, $\Delta x\Delta p=(2n+1)\hbar/2$, e sugli stati coerenti, che saturano il limite. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 83-85, 90-92, 97).

## Prerequisiti
- [[Disuguaglianza di Cauchy-Schwarz]]: passo chiave della dimostrazione generale (Quantum physics)
- [[Quantizzazione canonica]]: il commutatore $[x,p]=i\hbar$ fissa il limite (Quantum physics)

## Porta a
- [[Orbitali atomici]]: si può dare solo la probabilità di posizione

## Collegati
- [[Modello atomico di Bohr]]: le orbite definite violano l'indeterminazione
- [[Commutatore di operatori]]: il commutatore fissa il limite inferiore del prodotto delle indeterminazioni
- [[Stati coerenti]]: stati di minima indeterminazione, ΔxΔp = ħ/2 (Quantum physics)
