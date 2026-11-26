---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["null space method", "metodo del nucleo", "null-space approach", "riduzione allo spazio nullo", "base del nucleo di A", "soluzione particolare dei vincoli"]
tags: [competenza, area/ottimizzazione]
---

# Metodo dello spazio nullo

> Risoluzione di un QP con vincoli $Ax=b$ parametrizzando i punti ammissibili come $x=Zv+\hat x$, con $Z$ base di $\ker A$ e $\hat x$ soluzione particolare. Resta un sistema ridotto $(n-m)\times(n-m)$ con matrice $Z^TQZ$; funziona anche con $Q$ singolare.

## Definizione / enunciato
Sia $A\in\mathbb R^{m\times n}$ di rango pieno, $\hat x$ tale che $A\hat x=b$ e $Z\in\mathbb R^{n\times(n-m)}$ con colonne base di $\ker A$, cioè $AZ=0$. Ogni soluzione di $Ax=b$ è $x=Zv+\hat x$ con $v\in\mathbb R^{n-m}$. Si sostituisce nella prima equazione KKT $Qx+A^T\lambda=-c$ e si moltiplica a sinistra per $Z^T$. Il termine $Z^TA^T\lambda=(AZ)^T\lambda$ si annulla e resta
$$Z^TQZ\,v=-Z^T(c+Q\hat x).$$
Si risolve per $v$ e si ricostruisce $x^*=Zv^*+\hat x$. I moltiplicatori si ottengono da $AA^T\lambda=-A(c+Qx^*)$, moltiplicando a sinistra per $A$ (DS eq. 87, nella convenzione con il "+").

## Formule chiave
Costruzione di $Z$ e $\hat x$: si riordinano le colonne in modo che $A=[A_1\,|\,A_2]$ con $A_1\in\mathbb R^{m\times m}$ invertibile (possibile per il rango pieno). Allora
$$Z=\begin{pmatrix}-A_1^{-1}A_2\\ I_{n-m}\end{pmatrix},\qquad \hat x=\begin{pmatrix}A_1^{-1}b\\0\end{pmatrix}.$$
$Z$ costa $n-m$ sistemi con $A_1$; $\hat x$ costa un sistema con $A_1$, scegliendo $x_2=0$ in $A_1x_1=b-A_2x_2$.

## Intuizione
Si eliminano i vincoli muovendosi solo nel sottospazio ammissibile. $Z^TQZ$ è definita positiva per l'ipotesi del teorema sull'inerzia della matrice KKT. Non serve invertire $Q$.

## Come si usa
Costi nascosti:
- costruire $Z^TQZ$ richiede due prodotti matrice-matrice;
- il termine noto richiede due prodotti matrice-vettore;
- in più vanno calcolati $Z$ e $\hat x$.

È l'alternativa al complemento di Schur quando $Q$ è singolare o non facilmente invertibile.

## Nei corsi
- **Numerical opt** (magistrale): lezione Pieraccini sul QP e laboratorio 11 di Della Santa (§11.5.1 creazione di $Z$, §11.5.2 creazione di $x_p$). Fonti: `magistrale/Numerical opt/Pieraccini/Part_6_Constrained_Optimization_QP.pdf` (p. 9-12); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§11.5, eq. 84-92, Obs. 11.3).

## Prerequisiti
- [[Matrice KKT]]: il sistema che si riduce e il teorema che garantisce $Z^TQZ$ definita positiva

## Collegati
- [[Metodo del complemento di Schur]]: alternativa che richiede $Q$ invertibile
- [[Matrice simmetrica definita positiva]]: $Z^TQZ$ ridotta è definita positiva
