---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["finding a potential", "costruzione del potenziale", "ricostruire il potenziale", "metodo delle integrazioni successive", "potenziale più generale"]
tags: [competenza, area/analisi]
---

# Calcolo del potenziale

> Per trovare $f$ con $\nabla f=F$ si integra la prima componente rispetto a $x$, con una "costante" che dipende dalle altre variabili, e la si determina imponendo le altre equazioni.

## Definizione / enunciato
Dato $F$ conservativo in $\Omega$, si cerca $f$ con $f_x=F_1$, $f_y=F_2$ (e $f_z=F_3$).
1. Si integra $f_x=F_1$ in $x$: $f(x,y)=g(x,y)+C(y)$, dove la costante dipende da $y$ (in $\mathbb R^3$ da $y$ e $z$).
2. Si impone $f_y=F_2$: $\frac{\partial g}{\partial y}+C'(y)=F_2$, equazione differenziale per $C(y)$; in tre variabili si ripete con $z$.

## Formule chiave
Esempio in $\mathbb R^3$: da $F=(4x^3-yz,\ -xz+2yz,\ 2z+y^2-xy)$ si trova $f=x^4-xyz+C(y,z)$, poi $C=y^2z+k(z)$, poi $k'(z)=2z$:
$$f(x,y,z)=x^4-xyz+y^2z+z^2+\text{costante}.$$

## Intuizione
La procedura funziona perché il campo è conservativo: le equazioni per $C$ non contengono più $x$. Se il dominio ha più componenti connesse, la costante può essere scelta diversa in ciascuna.

## Come si usa
Esercizio della lezione: $F=\big(2x+\frac{e^{x/y}}y,\ -3y^2-\frac x{y^2}e^{x/y}\big)$ su $\{y\ne0\}=S^+\cup S^-$. Si verifica che $\frac{\partial F_1}{\partial y}=\frac{\partial F_2}{\partial x}$ in $S^+\cup S^-$; poiché $S^+\cup S^-$ è semplicemente connesso (lo sono anche $S^+$ e $S^-$ singolarmente), $F$ è conservativo in $S^+\cup S^-$. Integrando: $f=x^2+e^{x/y}+C(y)$, poi $C'(y)=-3y^2$, e il potenziale più generale è $x^2+e^{x/y}-y^3+k_1$ per $y>0$ e $+k_2$ per $y<0$.

## Nei corsi
- **Analisi 2** (triennale): lezione del 09/11/2022. Fonte: `triennale/ANNO 2/analisi 2/AII 12 2022 campi cons e Green.pdf` (pp. 1-8).

## Prerequisiti
- [[Campo conservativo]]: si cerca f con ∇f = F
- [[Primitive delle funzioni elementari]]: si integra F_1 in x
- [[Campo irrotazionale]]: prima si verifica dove F è irrotazionale

## Porta a
- Nessuno.

## Collegati
- Nessuno.
