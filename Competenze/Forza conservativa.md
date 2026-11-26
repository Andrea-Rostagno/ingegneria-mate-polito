---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["conservative force", "energia potenziale", "potential energy", "forza come gradiente dell'energia potenziale", "forze non conservative", "energia potenziale della forza peso"]
tags: [competenza, area/fisica]
---

# Forza conservativa

> Forza le cui componenti sono le derivate parziali, cambiate di segno, di una funzione scalare $U(x,y,z)$ (energia potenziale): il suo lavoro dipende solo dagli estremi.

## Definizione / enunciato
Una forza è conservativa se esiste $U(x,y,z)$, definita a meno di una costante, con
$$F_x=-\frac{\partial U}{\partial x},\quad F_y=-\frac{\partial U}{\partial y},\quad F_z=-\frac{\partial U}{\partial z}.$$
Conseguenze: il lavoro tra A e B è indipendente dal cammino, è nullo su ogni curva chiusa ed è la differenza di energia potenziale (la costante si elide).
Esempi conservativi: peso, forza gravitazionale, forza elastica, forza di Coulomb. Non conservative: attrito dinamico e statico, attrito viscoso, forza normale.

## Formule chiave
$$W_{AB}=U(A)-U(B),\qquad U_{peso}=mgz\ (+\text{cost}),\qquad U_{grav}=-\gamma\frac{m_0m}{|\vec r-\vec r_0|}$$

## Intuizione
Per una forza conservativa il lavoro si può "immagazzinare" in $U$ e recuperare; per l'attrito il lavoro dipende dalla lunghezza del percorso e non si recupera.

## Come si usa
Per verificare che una forza è conservativa si cerca una $U$ le cui derivate parziali (con segno meno) diano le componenti; nella dimostrazione si usa la stessa espansione già vista per la propagazione degli errori.

## Nei corsi
- **Fisica 1** (triennale): lezione del 21/03/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_punto_materiale/Dinamica_Puntomateriale_Lezione2.pdf` (pp. 33-48).
- **Meccanica** (triennale): **convenzione di segno opposta a Fisica 1.** $U$ è il *potenziale*, con $dL=dU$, $\vec F=\nabla U$ (5.25) e $L=U(P_2)-U(P_1)$ (5.26); l'energia potenziale è $V=-U$ (5.33). Esempi: forza costante, $U=\vec F\cdot(P-O)+k$ (5.28); forza centrale $\vec F=\psi(r)\hat u$, sempre conservativa con $U(r)=\int\psi(r)dr$; elastica con $\psi(r)=-kr$ e $U(r)=-\frac12kr^2+C$ (5.30-5.31; il testo stampa $\vec F=k(P-O)$ senza segno meno, in contrasto con $\psi=-kr$: da verificare sul PDF); gravitazionale $U(r)=\frac{hmM}r+C$ (5.32). Nel manoscritto ci sono anche i "potenziali notevoli" (molla, molla torsionale). Fonti: `triennale/ANNO 2/Meccanica/Lect4-MechanicsLaws.pdf` (pp. 49-51, numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (pp. 132-135).

## Prerequisiti
- [[Lavoro di una forza]]: lavoro indipendente dal cammino

## Porta a
- [[Conservazione dell'energia meccanica]]: il lavoro conservativo è -ΔU
- [[Forza centrale]]: le forze centrali sono conservative
- [[Campo gravitazionale]]: esiste l'energia potenziale

## Collegati
- [[Forza elastica]]: ha energia potenziale elastica
- [[Attrito radente]]: esempio di forza non conservativa
- [[Gradiente]]: la forza è meno il gradiente dell'energia potenziale (Analisi 2)
- [[Campo conservativo]]: versione matematica, F = ∇f con integrali di linea indipendenti dal cammino (Analisi 2)
