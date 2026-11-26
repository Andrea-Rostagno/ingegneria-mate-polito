---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Crittografia, Blockchain e criptoeconomia]
livello: [triennale, magistrale]
aliases: ["cyclic group", "generatore di un gruppo", "generator", "sottogruppi di Z", "classificazione dei gruppi ciclici", "radice primitiva", "primitive root", "elemento primitivo", "teorema di Gauss sulle radici primitive"]
tags: [competenza, area/algebra-geometria]
---

# Gruppo ciclico

> Un gruppo generato da un solo elemento. A meno di isomorfismo è $\mathbb Z$ oppure $\mathbb Z_n$, e tutti i suoi sottogruppi sono ciclici.

## Definizione / enunciato
**Def. 13.** $G$ è **ciclico** se esiste $x$ con $G=\langle x\rangle=\{x^n\mid n\in\mathbb Z\}$; $x$ si dice **generatore**.

Risultati:
- **Prop. 11:** ogni gruppo ciclico è abeliano, ma non viceversa.
- **Prop. 14 (lezione 6):** ogni sottogruppo di $(\mathbb Z,+)$ è della forma $n\mathbb Z$.
- **Prop. 14 (lezione 10):** ogni sottogruppo di un gruppo ciclico è ciclico.
- **Teorema 1 (lezione 11/12):** ogni gruppo ciclico è isomorfo a $\mathbb Z$ o a $\mathbb Z_n$ per qualche $n$.
- **Teorema 9 (lezione 13):** se $G$ è ciclico finito, per ogni divisore positivo $d$ di $|G|$ esiste esattamente un sottogruppo di ordine $d$.

## Formule chiave
$$H<\mathbb Z\ \Rightarrow\ H=n\mathbb Z;\qquad G=\langle x\rangle\ \Rightarrow\ G\cong\begin{cases}\mathbb Z & \mathrm{ord}(x)=\infty\\ \mathbb Z_n & \mathrm{ord}(x)=n\end{cases}$$

## Intuizione
Un generatore e le sue potenze descrivono tutto il gruppo. Se le potenze non si ripetono mai si ottiene una copia di $\mathbb Z$, altrimenti un "orologio" con $n$ posizioni.

## Come si usa
- **Sottogruppi di $\mathbb Z$:** se $H\neq\{0\}$, sia $n_0$ il minimo positivo in $H$ (buon ordinamento). Per $a\in H$, $a=n_0b+r$ con $r=a-bn_0\in H$ e $0\le r<n_0$, quindi $r=0$.
- **Classificazione:** $\varphi:\mathbb Z\to G$, $n\mapsto x^n$, è iniettiva se l'ordine è infinito. Se $\mathrm{ord}(x)=n$, la mappa $\bar k\mapsto x^k$ da $\mathbb Z_n$ a $G$ è ben definita e biiettiva.
- **Esempio a lezione:** $\mathbb Z_6=\langle\bar1\rangle$ ha come sottogruppi di ordine 2 e 3 rispettivamente $\langle\bar3\rangle=\{\bar0,\bar3\}$ e $\langle\bar2\rangle=\{\bar0,\bar2,\bar4\}$.
- **Abeliano non ciclico:** il gruppo di Klein ha tutti gli elementi di ordine $\le2$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 6, 10, 11/12 e 13. Fonti: `triennale/ANNO 2/istituzioni/Alg-10-10-22.pdf` (lezione 6, pp. 11-12); `triennale/ANNO 2/istituzioni/Alg-17-10-22.pdf` (lezione 10, pp. 8-10); `triennale/ANNO 2/istituzioni/Alg-19-10-22.pdf` (lezione 11/12, pp. 2-4); `triennale/ANNO 2/istituzioni/Alg-24-10-22.pdf` (lezione 13, pp. 9-10).
- **Crittografia** (magistrale): è il gruppo in cui si fa il logaritmo discreto. Se $G$ è ciclico con generatore $g$, l'equazione $g^k=m$ mette in biiezione gli elementi $m$ con gli esponenti $k$. Il valore crittografico sta nella difficoltà di risalire a $k$ da $m$. Un generatore di $\mathbb Z_n^\times$ si chiama **radice primitiva** modulo $n$, o elemento primitivo. **Teorema di Gauss (3.7.3):** $\mathbb Z_n^\times$ è ciclico se e solo se $n=2,4,p^k,2p^k$ con $p$ primo dispari. In particolare $\mathbb Z_p^*=GF^*(p)$ è ciclico (NOTE 6.1.6). Un ciclico con $n$ elementi ha $\varphi(n)$ generatori (Es. 3.7.7). Il Diffie-Hellman generalizzato (Critto 7 §7.1) usa l'isomorfismo $f:\mathbb Z_n\to G$, $k\mapsto g^k$, come funzione one-way. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3 §3.7, pp. 27-29 del PDF); `magistrale/Crittografia/Slide/slides week 1-14/week6/Crypto6.pdf` (§6.1, pp. 2-3); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week7.pdf` (§7.1).
- **Blockchain e criptoeconomia** (magistrale): il gruppo dei punti di secp256k1 ha ordine $n$ primo, quindi è ciclico e il punto base $G$ è un generatore. La chiave pubblica Bitcoin è $d_BG=G+\dots+G$ ($d_B$ termini). Fonte: `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 19-20).

## Prerequisiti
- [[Sottogruppo]]: $\langle x\rangle$ è il sottogruppo generato
- [[Ordine di un elemento]]: la cardinalità di $\langle x\rangle$
- [[Divisione euclidea]]: dimostra che i sottogruppi di $\mathbb Z$ sono $n\mathbb Z$

## Porta a
- [[Campo finito]]: il gruppo moltiplicativo di un campo finito è ciclico
- [[Scambio di chiavi Diffie-Hellman]]: lo scambio avviene in un gruppo ciclico con generatore pubblico (Crittografia)
- [[Curva ellittica]]: il gruppo dei punti di secp256k1 è ciclico, generato da $G$ (Blockchain e criptoeconomia)

## Collegati
- [[Classi di resto modulo n]]: $\mathbb Z_n$ è il modello dei ciclici finiti
- [[Teorema di Lagrange sui gruppi]]: per i ciclici vale il viceversa di Lagrange
- [[Gruppo diedrale]]: il gruppo di Klein è abeliano ma non ciclico
- [[Dominio a ideali principali]]: in $\mathbb Z$ "sottogruppi $=n\mathbb Z$" diventa "ideali principali"
