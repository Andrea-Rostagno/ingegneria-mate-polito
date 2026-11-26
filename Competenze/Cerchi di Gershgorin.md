---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["Gershgorin circles", "teorema di Gershgorin", "Gershgorin disks", "localizzazione degli autovalori"]
tags: [competenza, area/algebra-geometria]
---

# Cerchi di Gershgorin

> Dischi del piano complesso, costruiti da righe e colonne di $A$, la cui unione contiene tutti gli autovalori.

## Definizione / enunciato
Cerchi riga e cerchi colonna:
$$C_i^{(r)}=\Big\{z\in\mathbb C:|z-a_{ii}|\le\sum_{j=1,j\ne i}^n|a_{ij}|\Big\},\qquad C_j^{(c)}=\Big\{z\in\mathbb C:|z-a_{jj}|\le\sum_{i=1,i\ne j}^n|a_{ij}|\Big\}.$$
**Teoremi.**
1. Tutti gli autovalori stanno in $\mathcal R=\bigcup_iC_i^{(r)}$ e in $\mathcal C=\bigcup_jC_j^{(c)}$, quindi in $\mathcal R\cap\mathcal C$.
2. Se l'unione $\mathcal R_1$ di $k$ cerchi riga è disgiunta dall'unione $\mathcal R_2$ dei restanti, esattamente $k$ autovalori stanno in $\mathcal R_1$ e $n-k$ in $\mathcal R_2$ (idem per le colonne).

## Formule chiave
$$\lambda\in\Big(\bigcup_{i=1}^nC_i^{(r)}\Big)\cap\Big(\bigcup_{j=1}^nC_j^{(c)}\Big)$$

## Intuizione
Ogni cerchio è centrato su un elemento diagonale con raggio pari alla "massa" fuori diagonale della riga (o colonna): più la matrice è vicina a una diagonale, più gli autovalori sono vicini agli $a_{ii}$. Si localizzano gli autovalori senza calcolarli.

## Come si usa
Esempio delle slide: $A=\begin{pmatrix}30&1&2&3\\4&15&-4&-2\\-1&0&3&5\\-3&5&0&1\end{pmatrix}$. Con $\mathcal C_1=C_1^{(c)}$ e $\mathcal C_2=\bigcup_{j=2}^4C_j^{(c)}$ disgiunti, un autovalore sta in $\mathcal C_1$ e tre in $\mathcal C_2$. Uso pratico: fornire l'approssimazione $p$ per il metodo delle potenze inverse.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 11-14, 43).

## Prerequisiti
- [[Autovalori e autovettori]]: localizzano gli autovalori nel piano complesso

## Porta a
- [[Metodo delle potenze inverse]]: forniscono la stima p

## Collegati
- Nessuno.
