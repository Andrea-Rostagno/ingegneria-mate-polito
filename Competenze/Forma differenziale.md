---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["differential form", "1-forma differenziale", "differential 1-form", "campo covettoriale", "covector field", "differenziale di una funzione", "df", "base dx_i", "forma esatta di grado 1"]
tags: [competenza, area/algebra-geometria]
---

# Forma differenziale

> Una 1-forma assegna a ogni punto un covettore, cioè un funzionale lineare sui vettori tangenti. Il differenziale $df$ di una funzione è l'esempio fondamentale e i $dx_i$ ne sono la base.

## Definizione / enunciato
**Differenziale.** $f:\Omega\to\mathbb R$ è differenziabile in $q$ se esiste $(df)_q\in T_q^*\mathbb R^n$ lineare con
$$f(q+\vec v)-f(q)=(df)_q(\vec v)+o(\|\vec v\|).$$
Si dimostra che $(df)_q(\vec v)=\nabla f(q)\cdot\vec v$, cioè la derivata direzionale: il vettore $(\vec v,(df)_q\vec v)$ sta nel piano tangente al grafico.

**Proposizione.** $\big((dx_1)_q,\dots,(dx_n)_q\big)$ è la base di $T_q^*\Omega$ duale a $(\partial_{x_i}|_q)$, perché $dx_i(\partial_{x_k})=\delta_{ik}$.

**Forma differenziale** (campo covettoriale): $W:q\mapsto W_q\in T_q^*\mathbb R^n$. In coordinate,
$$W=f_i\,dx_i,\qquad f_i=W(\partial_{x_i}).$$
È un campo tensoriale di tipo $(0,1)$. La forma $W$ è **esatta** se $W=df$ per qualche $f$.

## Formule chiave
$$df=\frac{\partial f}{\partial x_i}dx_i,\qquad W(X)=f_ia_i\ \ (W=f_kdx_k,\ X=a_i\partial_{x_i}),\qquad X(W):=W(X),\qquad a_i=dx_i(X)=X(x_i)$$

## Intuizione
I $dx_i$ sono "le funzioni coordinate dei vettori tangenti". Una forma misura i vettori, un campo li fornisce: insieme danno una funzione. Non ogni forma è un differenziale: $x\,dx+x\,dy$ su $\mathbb R^2$ non è esatta, perché servirebbe $f_x=x$ e $f_y=x$.

## Come si usa
- Cambio di coordinate e restrizione a superfici: si usa il pull-back.
- Integrazione lungo curve: l'integrale curvilineo di seconda specie è $\int_a^bP^*(\omega)$.
- Si generalizza alle $k$-forme con il prodotto wedge.

## Nei corsi
- **Geometria differenziale** (triennale): fonte `triennale/ANNO 2/geometria differenziale/Lezione16_GD.pdf` (pp. 1-12). La 1-forma come caso $k=1$ si trova in `Lezione24_GD.pdf` (p. 3).

## Prerequisiti
- [[Spazio duale]]: (dx_i) è la base duale di (∂_{x_i})
- [[Spazio tangente]]: W_q agisce su T_qΩ
- [[Differenziabilità in più variabili]]: definizione di (df)_q
- [[Gradiente]]: (df)_q(v) = ∇f·v

## Porta a
- [[Pull-back]]: trasporto di forme tramite f^*
- [[Prodotto wedge]]: k-forme a partire dalle 1-forme
- [[Differenziale esterno]]: d estende f ↦ df
- [[Integrale di linea]]: integrale di una 1-forma lungo una curva

## Collegati
- [[Campo vettoriale]]: oggetto duale, W(X) è una funzione
- [[Campo conservativo]]: una 1-forma esatta corrisponde a un campo gradiente
