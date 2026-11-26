---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["adjoint operator", "aggiunto di un operatore limitato", "A*", "Hilbert adjoint", "condizione C*", "C*-identity", "trasposta coniugata"]
tags: [competenza, area/analisi]
---

# Operatore aggiunto

> L'unico operatore $A^*$ che sposta $A$ dall'altra parte del prodotto scalare: $\langle Ax,y\rangle=\langle x,A^*y\rangle$. In dimensione finita è la trasposta coniugata.

## Definizione / enunciato
**Prop. 10.1 / Def. 10.2.** Siano $H_1,H_2$ di Hilbert e $A\in\mathcal B(H_1,H_2)$. Esiste un unico $A^*\in\mathcal B(H_2,H_1)$ con
$$\langle Ax,y\rangle_{H_2}=\langle x,A^*y\rangle_{H_1}\qquad\forall x\in H_1,\ y\in H_2,$$
e $\|A^*\|_{op}=\|A\|_{op}$. Per $H_1=\mathbb F^n$, $H_2=\mathbb F^m$ (o basi ortonormali) la matrice di $A^*$ è la **trasposta coniugata** di quella di $A$.

## Formule chiave
Prop. 10.5:
$$A^{**}=A,\quad(\alpha A+\beta B)^*=\bar\alpha A^*+\bar\beta B^*,\quad(BA)^*=A^*B^*,\quad\|A^*A\|_{op}=\|A\|_{op}^2,$$
$(A^*)^{-1}=(A^{-1})^*$ se $A$ è un isomorfismo;
$$\operatorname{Ker}(A^*)=(\operatorname{Im}A)^\perp,\qquad\overline{\operatorname{Im}A}=\operatorname{Ker}(A^*)^\perp,\qquad H_2=\operatorname{Ker}(A^*)\oplus\overline{\operatorname{Im}A}.$$
Cor. 10.6: $A\mapsto A^*$ è un anti-isomorfismo isometrico $\mathcal B(H_1,H_2)\to\mathcal B(H_2,H_1)$.

## Intuizione
Per $y$ fissato, $x\mapsto\langle Ax,y\rangle$ è un funzionale continuo: Riesz-Fréchet lo rappresenta come $\langle x,z\rangle$, e si pone $A^*y=z$. L'aggiunto codifica la "geometria" di $A$: nucleo dell'uno e immagine dell'altro sono ortogonali.

## Come si usa
Esempi (Es. 10.4): $\mathrm{id}^*=\mathrm{id}$; shift sinistro $S$ su $\ell^2$ ha $S^*$ = shift destro con zero in testa; $D_w^*=D_{\bar w}$; $T_K^*=T_{K^*}$ con $K^*(y,x)=\overline{K(x,y)}$. Permette di definire operatori autoaggiunti, normali, unitari e proiezioni ortogonali ($P^2=P=P^*$), e dà il criterio di invertibilità: $T$ isomorfismo $\iff\operatorname{Ker}T^*=\{0\}$ e $T$ coercivo in norma.

## Nei corsi
- **Analisi funzionale** (triennale): §10.1 "Aggiunto di un operatore limitato" (Prop. 10.1, Def. 10.2, Es. 10.4, Prop. 10.5, Cor. 10.6-10.7). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 147-151); `triennale/ANNO 3/analisi funzionale/09_aggiunto_handout.pdf` (pp. 2-5).

## Prerequisiti
- [[Teorema di rappresentazione di Riesz-Fréchet]]: esistenza di A*
- [[Operatore lineare limitato]]: A in B(H1,H2)
- [[Forma sesquilineare]]: (x,y) ↦ ⟨Ax,y⟩ è una forma continua

## Porta a
- [[Operatore normale]]: T*T = TT*
- [[Endomorfismo simmetrico]]: operatori autoaggiunti T* = T
- [[Trasformazione unitaria]]: T*T = TT* = id
- [[Spettro di un operatore limitato]]: σ(T*) è il coniugato di σ(T)
- [[Alternativa di Fredholm]]: H = Ker(T*) ⊕ Im T

## Collegati
- [[Complemento ortogonale]]: Ker(A*) = (Im A)⊥
- [[Operatore coercivo in norma]]: criterio di invertibilità con Ker(T*) = {0}
- [[Proiezione ortogonale di un vettore]]: proiezioni ortogonali come P² = P = P*
- [[Operatore integrale]]: aggiunto con nucleo trasposto coniugato
