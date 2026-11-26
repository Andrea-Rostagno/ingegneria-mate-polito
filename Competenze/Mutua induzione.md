---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["mutual inductance", "coefficiente di mutua induzione", "circuiti accoppiati", "M12 = M21", "trasformatore"]
tags: [competenza, area/fisica]
---

# Mutua induzione

> Due circuiti vicini si scambiano flusso magnetico: una corrente variabile in uno induce una f.e.m. nell'altro, con un unico coefficiente $M$ per entrambi i versi.

## Definizione / enunciato
Due circuiti (1) e (2) di geometria nota, in posizioni fisse. La corrente $I_1$ crea il campo $\vec B_1$; alcune sue linee sono concatenate al circuito (2), cioè danno un flusso attraverso una superficie $S_2$ con contorno il circuito (2). Il flusso è proporzionale a $I_1$ e il coefficiente $M_{2,1}$ dipende solo dalla forma dei circuiti, dalla loro posizione relativa e dal mezzo. Analogamente $\Phi_1=M_{1,2}I_2$. Si dimostra che $M_{1,2}=M_{2,1}=M$, **coefficiente di mutua induzione**, in henry [H].

## Formule chiave
$$\Phi_2(B_1)=\left[\int_{S_2(\gamma2)}\oint_{\gamma1}\frac{\mu_0}{4\pi}\frac{d\vec l_1}{r_1^2}\times\vec u_{r,1}\cdot\vec u_{N,2}\,ds_2\right]I_1,\qquad \Phi_2=M_{2,1}I_1$$
$$V_2=-M_{2,1}\frac{dI_1}{dt},\qquad V_1=-M_{1,2}\frac{dI_2}{dt}$$
$$En=\frac12L_1I_1^2+\frac12L_2I_2^2+M_{1,2}I_2I_1=\frac12L_2I_2^2+\frac12L_1I_1^2+M_{2,1}I_2I_1\ \Rightarrow\ M_{1,2}=M_{2,1}=M$$

## Intuizione
L'uguaglianza dei coefficienti viene dall'energia: accendendo prima $I_1$ e poi $I_2$ (caso 1) o viceversa (caso 2), la configurazione finale del campo magnetico è la stessa, quindi l'energia spesa deve coincidere. Il termine misto è il lavoro aggiuntivo per mantenere una corrente in presenza del campo variabile dell'altro circuito.

## Come si usa
Si calcola il campo di un circuito, il suo flusso attraverso l'altro e si divide per la corrente. Tra i due circuiti si scambia energia mediante il campo elettromagnetico: su questo si basano il trasformatore e la trasmissione del segnale con antenne.

## Nei corsi
- **Fisica 2** (triennale): circuiti accoppiati, f.e.m. mutue, dimostrazione energetica di $M_{1,2}=M_{2,1}$ (casi 1 e 2). Fonti: `triennale/ANNO 2/fisica 2/lezioni/23&24. LEZIONE.pdf` (pp. 28-37).

## Prerequisiti
- [[Autoinduzione]]: stesso calcolo di flusso tra due circuiti
- [[Energia del campo magnetico]]: l'uguaglianza M12 = M21 si dimostra con l'energia

## Porta a
- Nessuno.

## Collegati
- Nessuno.
